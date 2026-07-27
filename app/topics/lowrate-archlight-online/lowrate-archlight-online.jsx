import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-archlight-online');
}

export default function LowrateArchlightOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-archlight-online" />;
}
