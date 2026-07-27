import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-10-0-seasonal-server');
}

export default function RuthlessChaos100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-10-0-seasonal-server" />;
}
