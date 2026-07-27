import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiame-wiki');
}

export default function RealMapTibiameWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiame-wiki" />;
}
