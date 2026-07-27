import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dura-online-private-server');
}

export default function ActiveDuraOnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-dura-online-private-server" />;
}
