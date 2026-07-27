import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-15-evo-server');
}

export default function Evolunia15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-15-evo-server" />;
}
