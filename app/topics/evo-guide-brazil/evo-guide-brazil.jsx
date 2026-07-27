import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-guide-brazil');
}

export default function EvoGuideBrazilKeywordPage() {
  return <StaticKeywordPage slug="evo-guide-brazil" />;
}
