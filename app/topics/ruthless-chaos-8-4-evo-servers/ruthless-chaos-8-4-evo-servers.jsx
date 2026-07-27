import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-8-4-evo-servers');
}

export default function RuthlessChaos84EvoServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-8-4-evo-servers" />;
}
