import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-1-evo-server');
}

export default function Evolunia81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-1-evo-server" />;
}
