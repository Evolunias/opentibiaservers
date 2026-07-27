import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-archlight-online');
}

export default function CustomArchlightOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-archlight-online" />;
}
