import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nto-star-wiki');
}

export default function RealMapNtoStarWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-nto-star-wiki" />;
}
