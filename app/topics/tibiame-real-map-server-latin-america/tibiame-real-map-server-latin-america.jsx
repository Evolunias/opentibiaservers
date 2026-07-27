import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-real-map-server-latin-america');
}

export default function TibiameRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-real-map-server-latin-america" />;
}
