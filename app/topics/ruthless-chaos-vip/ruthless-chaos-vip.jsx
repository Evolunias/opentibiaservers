import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-vip');
}

export default function RuthlessChaosVipKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-vip" />;
}
