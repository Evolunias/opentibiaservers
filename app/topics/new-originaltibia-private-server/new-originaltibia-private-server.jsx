import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-originaltibia-private-server');
}

export default function NewOriginaltibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-originaltibia-private-server" />;
}
