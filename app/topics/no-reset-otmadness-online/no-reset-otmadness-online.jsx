import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-otmadness-online');
}

export default function NoResetOtmadnessOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-otmadness-online" />;
}
