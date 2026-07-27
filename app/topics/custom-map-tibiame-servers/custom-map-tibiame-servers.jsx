import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibiame-servers');
}

export default function CustomMapTibiameServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibiame-servers" />;
}
