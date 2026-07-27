import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dura-online-private-server');
}

export default function PopularDuraOnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-dura-online-private-server" />;
}
