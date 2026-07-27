import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibiame-server');
}

export default function CustomMapTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibiame-server" />;
}
