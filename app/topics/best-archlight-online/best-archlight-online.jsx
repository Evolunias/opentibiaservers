import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-archlight-online');
}

export default function BestArchlightOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-archlight-online" />;
}
