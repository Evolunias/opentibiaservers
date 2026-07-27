import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oxygenot-online');
}

export default function NoResetOxygenotOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oxygenot-online" />;
}
