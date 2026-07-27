import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-evolunia-server');
}

export default function EvoEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="evo-evolunia-server" />;
}
