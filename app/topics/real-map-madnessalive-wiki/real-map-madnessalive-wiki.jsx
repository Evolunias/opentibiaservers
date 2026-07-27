import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-madnessalive-wiki');
}

export default function RealMapMadnessaliveWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-madnessalive-wiki" />;
}
