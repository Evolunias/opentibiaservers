import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-north-america-server');
}

export default function RuthlessChaosNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-north-america-server" />;
}
