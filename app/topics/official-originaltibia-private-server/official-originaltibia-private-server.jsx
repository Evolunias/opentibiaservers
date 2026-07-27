import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-originaltibia-private-server');
}

export default function OfficialOriginaltibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-originaltibia-private-server" />;
}
