import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-11-evo-server');
}

export default function Oxygenot11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-11-evo-server" />;
}
