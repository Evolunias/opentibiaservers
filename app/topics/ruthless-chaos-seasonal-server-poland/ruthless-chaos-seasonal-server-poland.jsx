import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-seasonal-server-poland');
}

export default function RuthlessChaosSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-seasonal-server-poland" />;
}
