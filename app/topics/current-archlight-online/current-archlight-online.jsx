import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-archlight-online');
}

export default function CurrentArchlightOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-archlight-online" />;
}
