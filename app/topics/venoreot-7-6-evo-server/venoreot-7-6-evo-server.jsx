import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-6-evo-server');
}

export default function Venoreot76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-6-evo-server" />;
}
