import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-originaltibia-private-server');
}

export default function ActiveOriginaltibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-originaltibia-private-server" />;
}
