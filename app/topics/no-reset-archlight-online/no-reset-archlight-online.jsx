import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-archlight-online');
}

export default function NoResetArchlightOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-archlight-online" />;
}
