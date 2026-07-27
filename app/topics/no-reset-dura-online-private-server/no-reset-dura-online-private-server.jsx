import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dura-online-private-server');
}

export default function NoResetDuraOnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dura-online-private-server" />;
}
