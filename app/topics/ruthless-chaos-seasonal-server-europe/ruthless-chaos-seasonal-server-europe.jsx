import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-seasonal-server-europe');
}

export default function RuthlessChaosSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-seasonal-server-europe" />;
}
