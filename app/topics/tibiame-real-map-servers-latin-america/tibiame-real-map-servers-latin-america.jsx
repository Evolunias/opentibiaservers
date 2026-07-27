import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-real-map-servers-latin-america');
}

export default function TibiameRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-real-map-servers-latin-america" />;
}
