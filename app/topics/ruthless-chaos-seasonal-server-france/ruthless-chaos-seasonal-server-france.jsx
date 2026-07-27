import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-seasonal-server-france');
}

export default function RuthlessChaosSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-seasonal-server-france" />;
}
