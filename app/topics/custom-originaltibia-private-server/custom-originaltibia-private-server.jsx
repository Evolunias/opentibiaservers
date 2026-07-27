import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-originaltibia-private-server');
}

export default function CustomOriginaltibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-originaltibia-private-server" />;
}
