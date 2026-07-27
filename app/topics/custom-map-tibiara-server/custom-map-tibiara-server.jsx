import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibiara-server');
}

export default function CustomMapTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibiara-server" />;
}
