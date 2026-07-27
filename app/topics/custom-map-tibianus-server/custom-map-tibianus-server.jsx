import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibianus-server');
}

export default function CustomMapTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibianus-server" />;
}
