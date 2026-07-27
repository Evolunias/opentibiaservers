import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-online');
}

export default function RuthlessChaosOnlineKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-online" />;
}
