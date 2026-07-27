import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ruthless-chaos-online');
}

export default function HighrateRuthlessChaosOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-ruthless-chaos-online" />;
}
