import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-seasonal-server-sweden');
}

export default function RuthlessChaosSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-seasonal-server-sweden" />;
}
