import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-15-seasonal-server');
}

export default function RuthlessChaos15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-15-seasonal-server" />;
}
