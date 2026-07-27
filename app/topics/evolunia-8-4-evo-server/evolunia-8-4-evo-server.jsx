import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-4-evo-server');
}

export default function Evolunia84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-4-evo-server" />;
}
