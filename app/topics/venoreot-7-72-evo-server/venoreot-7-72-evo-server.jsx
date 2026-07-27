import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-72-evo-server');
}

export default function Venoreot772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-72-evo-server" />;
}
