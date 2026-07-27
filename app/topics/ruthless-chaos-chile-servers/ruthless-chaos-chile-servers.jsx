import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-chile-servers');
}

export default function RuthlessChaosChileServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-chile-servers" />;
}
