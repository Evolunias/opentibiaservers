import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-germany-servers');
}

export default function RuthlessChaosGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-germany-servers" />;
}
