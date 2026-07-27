import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-seasonal-server-germany');
}

export default function RuthlessChaosSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-seasonal-server-germany" />;
}
