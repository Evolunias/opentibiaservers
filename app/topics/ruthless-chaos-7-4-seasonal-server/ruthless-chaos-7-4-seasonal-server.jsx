import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-7-4-seasonal-server');
}

export default function RuthlessChaos74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-7-4-seasonal-server" />;
}
