import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-4-evo-server');
}

export default function Oxygenot74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-4-evo-server" />;
}
