import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-7-1-evo-servers');
}

export default function RuthlessChaos71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-7-1-evo-servers" />;
}
