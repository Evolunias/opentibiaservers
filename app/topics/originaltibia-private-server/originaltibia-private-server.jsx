import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-private-server');
}

export default function OriginaltibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-private-server" />;
}
