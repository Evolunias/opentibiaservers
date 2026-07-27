import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dura-online-private-server');
}

export default function OfficialDuraOnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-dura-online-private-server" />;
}
