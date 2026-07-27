import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-seasonal-server-latin-america');
}

export default function RuthlessChaosSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-seasonal-server-latin-america" />;
}
