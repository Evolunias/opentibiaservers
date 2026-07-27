import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-evo-servers-usa');
}

export default function RuthlessChaosEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-evo-servers-usa" />;
}
