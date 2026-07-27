import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-1-evo-server');
}

export default function Venoreot81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-1-evo-server" />;
}
