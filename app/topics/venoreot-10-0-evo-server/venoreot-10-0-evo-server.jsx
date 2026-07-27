import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-10-0-evo-server');
}

export default function Venoreot100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-10-0-evo-server" />;
}
