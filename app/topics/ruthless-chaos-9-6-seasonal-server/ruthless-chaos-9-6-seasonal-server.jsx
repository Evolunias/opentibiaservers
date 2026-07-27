import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-9-6-seasonal-server');
}

export default function RuthlessChaos96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-9-6-seasonal-server" />;
}
