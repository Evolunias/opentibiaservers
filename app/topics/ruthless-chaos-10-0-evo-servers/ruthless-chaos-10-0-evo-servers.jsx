import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-10-0-evo-servers');
}

export default function RuthlessChaos100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-10-0-evo-servers" />;
}
