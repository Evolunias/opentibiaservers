import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiara-online');
}

export default function NoResetTibiaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiara-online" />;
}
