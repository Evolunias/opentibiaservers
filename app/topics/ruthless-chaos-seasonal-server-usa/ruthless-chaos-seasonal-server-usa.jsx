import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-seasonal-server-usa');
}

export default function RuthlessChaosSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-seasonal-server-usa" />;
}
