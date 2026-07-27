import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-1-evo-server');
}

export default function Evolunia71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-1-evo-server" />;
}
