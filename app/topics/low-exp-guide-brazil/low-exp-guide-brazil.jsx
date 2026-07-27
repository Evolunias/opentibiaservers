import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-guide-brazil');
}

export default function LowExpGuideBrazilKeywordPage() {
  return <StaticKeywordPage slug="low-exp-guide-brazil" />;
}
