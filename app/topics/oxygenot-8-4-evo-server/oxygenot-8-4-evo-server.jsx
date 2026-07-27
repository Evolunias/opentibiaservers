import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-4-evo-server');
}

export default function Oxygenot84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-4-evo-server" />;
}
