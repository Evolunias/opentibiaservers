import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-14-seasonal-server');
}

export default function RuthlessChaos14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-14-seasonal-server" />;
}
