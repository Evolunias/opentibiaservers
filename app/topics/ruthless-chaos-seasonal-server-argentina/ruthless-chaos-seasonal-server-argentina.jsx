import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-seasonal-server-argentina');
}

export default function RuthlessChaosSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-seasonal-server-argentina" />;
}
