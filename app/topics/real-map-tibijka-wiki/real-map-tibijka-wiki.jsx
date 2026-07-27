import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibijka-wiki');
}

export default function RealMapTibijkaWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibijka-wiki" />;
}
