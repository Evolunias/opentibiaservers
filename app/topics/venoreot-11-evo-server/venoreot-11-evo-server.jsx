import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-11-evo-server');
}

export default function Venoreot11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-11-evo-server" />;
}
