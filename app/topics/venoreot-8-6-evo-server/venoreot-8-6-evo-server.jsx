import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-6-evo-server');
}

export default function Venoreot86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-6-evo-server" />;
}
