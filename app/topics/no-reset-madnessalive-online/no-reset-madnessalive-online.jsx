import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-madnessalive-online');
}

export default function NoResetMadnessaliveOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-madnessalive-online" />;
}
