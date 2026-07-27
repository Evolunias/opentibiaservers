import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ruthless-chaos-online');
}

export default function NoResetRuthlessChaosOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ruthless-chaos-online" />;
}
