import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibiara-servers');
}

export default function CustomMapTibiaraServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibiara-servers" />;
}
