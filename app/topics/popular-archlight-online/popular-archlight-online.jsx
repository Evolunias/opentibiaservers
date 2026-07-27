import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-archlight-online');
}

export default function PopularArchlightOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-archlight-online" />;
}
