import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-11-evo-server');
}

export default function Evolunia11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-11-evo-server" />;
}
