import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dura-online-private-server');
}

export default function TopDuraOnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-dura-online-private-server" />;
}
