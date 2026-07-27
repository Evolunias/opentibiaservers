import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-0-evo-server');
}

export default function Evolunia80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-0-evo-server" />;
}
