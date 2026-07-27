import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eternal-odyssey-wiki');
}

export default function RealMapEternalOdysseyWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-eternal-odyssey-wiki" />;
}
