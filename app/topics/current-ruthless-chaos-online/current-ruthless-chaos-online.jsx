import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ruthless-chaos-online');
}

export default function CurrentRuthlessChaosOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-ruthless-chaos-online" />;
}
