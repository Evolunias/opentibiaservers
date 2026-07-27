import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-13-seasonal-server');
}

export default function RuthlessChaos13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-13-seasonal-server" />;
}
