import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-seasonal-server-uk');
}

export default function RuthlessChaosSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-seasonal-server-uk" />;
}
