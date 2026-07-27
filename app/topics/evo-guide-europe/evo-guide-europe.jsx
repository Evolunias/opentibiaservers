import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-guide-europe');
}

export default function EvoGuideEuropeKeywordPage() {
  return <StaticKeywordPage slug="evo-guide-europe" />;
}
