import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-evolunia-servers');
}

export default function EvoEvoluniaServersKeywordPage() {
  return <StaticKeywordPage slug="evo-evolunia-servers" />;
}
