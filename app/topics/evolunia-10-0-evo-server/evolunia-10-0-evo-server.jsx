import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-10-0-evo-server');
}

export default function Evolunia100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-10-0-evo-server" />;
}
