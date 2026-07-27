import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-9-6-evo-server');
}

export default function Evolera96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-9-6-evo-server" />;
}
