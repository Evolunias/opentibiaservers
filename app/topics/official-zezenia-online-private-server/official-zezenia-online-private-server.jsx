import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zezenia-online-private-server');
}

export default function OfficialZezeniaOnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-zezenia-online-private-server" />;
}
