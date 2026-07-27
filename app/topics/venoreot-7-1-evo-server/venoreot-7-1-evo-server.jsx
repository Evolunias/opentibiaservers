import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-1-evo-server');
}

export default function Venoreot71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-1-evo-server" />;
}
