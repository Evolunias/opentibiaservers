import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-ruthless-chaos-server');
}

export default function SeasonalRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-ruthless-chaos-server" />;
}
