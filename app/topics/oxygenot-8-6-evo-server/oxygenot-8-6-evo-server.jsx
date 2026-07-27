import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-6-evo-server');
}

export default function Oxygenot86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-6-evo-server" />;
}
