import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-guide-mexico');
}

export default function EvoGuideMexicoKeywordPage() {
  return <StaticKeywordPage slug="evo-guide-mexico" />;
}
