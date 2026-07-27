import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-north-america-servers');
}

export default function RuthlessChaosNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-north-america-servers" />;
}
