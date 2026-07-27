import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-archlight-online');
}

export default function TopArchlightOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-archlight-online" />;
}
