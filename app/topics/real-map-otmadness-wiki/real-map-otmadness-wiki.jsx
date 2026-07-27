import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-otmadness-wiki');
}

export default function RealMapOtmadnessWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-otmadness-wiki" />;
}
