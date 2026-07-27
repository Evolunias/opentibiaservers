import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ruthless-chaos-online');
}

export default function LowrateRuthlessChaosOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ruthless-chaos-online" />;
}
