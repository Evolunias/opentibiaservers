import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-14-evo-server');
}

export default function Evolunia14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-14-evo-server" />;
}
