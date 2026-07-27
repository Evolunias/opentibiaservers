import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-4-evo-server');
}

export default function Venoreot84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-4-evo-server" />;
}
