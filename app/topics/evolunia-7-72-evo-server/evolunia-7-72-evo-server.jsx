import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-72-evo-server');
}

export default function Evolunia772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-72-evo-server" />;
}
