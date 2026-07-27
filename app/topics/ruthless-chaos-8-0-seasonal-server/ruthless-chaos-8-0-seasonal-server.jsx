import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-8-0-seasonal-server');
}

export default function RuthlessChaos80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-8-0-seasonal-server" />;
}
