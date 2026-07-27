import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-8-4-seasonal-server');
}

export default function RuthlessChaos84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-8-4-seasonal-server" />;
}
