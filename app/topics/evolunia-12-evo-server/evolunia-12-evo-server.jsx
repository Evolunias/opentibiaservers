import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-12-evo-server');
}

export default function Evolunia12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-12-evo-server" />;
}
