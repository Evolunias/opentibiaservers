import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-archlight-online');
}

export default function ActiveArchlightOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-archlight-online" />;
}
