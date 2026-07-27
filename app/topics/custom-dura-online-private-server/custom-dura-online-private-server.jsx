import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dura-online-private-server');
}

export default function CustomDuraOnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-dura-online-private-server" />;
}
