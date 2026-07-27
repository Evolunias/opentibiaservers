import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-54-evo-server');
}

export default function Evolunia854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-54-evo-server" />;
}
