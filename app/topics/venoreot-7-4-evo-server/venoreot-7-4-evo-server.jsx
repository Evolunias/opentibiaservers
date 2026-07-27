import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-4-evo-server');
}

export default function Venoreot74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-4-evo-server" />;
}
