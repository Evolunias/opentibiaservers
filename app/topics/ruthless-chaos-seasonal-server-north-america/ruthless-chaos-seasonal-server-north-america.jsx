import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-seasonal-server-north-america');
}

export default function RuthlessChaosSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-seasonal-server-north-america" />;
}
