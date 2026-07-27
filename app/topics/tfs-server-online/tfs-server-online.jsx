import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server-online');
}

export default function TfsServerOnlineKeywordPage() {
  return <StaticKeywordPage slug="tfs-server-online" />;
}
