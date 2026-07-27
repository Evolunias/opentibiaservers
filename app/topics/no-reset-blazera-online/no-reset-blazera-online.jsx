import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-blazera-online');
}

export default function NoResetBlazeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-blazera-online" />;
}
