import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-private-server');
}

export default function DuraOnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-private-server" />;
}
