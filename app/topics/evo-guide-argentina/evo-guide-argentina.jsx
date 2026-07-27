import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-guide-argentina');
}

export default function EvoGuideArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evo-guide-argentina" />;
}
