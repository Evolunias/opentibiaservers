import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-originaltibia-server');
}

export default function CustomMapOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-originaltibia-server" />;
}
