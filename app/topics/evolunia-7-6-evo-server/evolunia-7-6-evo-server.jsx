import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-6-evo-server');
}

export default function Evolunia76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-6-evo-server" />;
}
