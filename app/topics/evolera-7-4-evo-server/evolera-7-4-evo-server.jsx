import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-4-evo-server');
}

export default function Evolera74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-4-evo-server" />;
}
