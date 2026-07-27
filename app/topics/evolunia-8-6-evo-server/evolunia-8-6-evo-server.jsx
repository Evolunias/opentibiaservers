import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-6-evo-server');
}

export default function Evolunia86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-6-evo-server" />;
}
