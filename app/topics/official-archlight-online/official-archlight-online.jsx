import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-archlight-online');
}

export default function OfficialArchlightOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-archlight-online" />;
}
