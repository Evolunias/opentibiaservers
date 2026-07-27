import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-11-seasonal-server');
}

export default function RuthlessChaos11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-11-seasonal-server" />;
}
