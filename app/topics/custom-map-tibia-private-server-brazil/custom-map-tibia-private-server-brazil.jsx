import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibia-private-server-brazil');
}

export default function CustomMapTibiaPrivateServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibia-private-server-brazil" />;
}
