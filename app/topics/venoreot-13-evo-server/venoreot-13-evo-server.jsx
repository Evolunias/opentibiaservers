import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-13-evo-server');
}

export default function Venoreot13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-13-evo-server" />;
}
