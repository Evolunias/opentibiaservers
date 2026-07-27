import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dura-online-private-server');
}

export default function FreshStartDuraOnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dura-online-private-server" />;
}
