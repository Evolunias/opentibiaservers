import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-market');
}

export default function RuthlessChaosMarketKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-market" />;
}
