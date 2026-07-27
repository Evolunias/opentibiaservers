import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-0-evo-server');
}

export default function Venoreot80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-0-evo-server" />;
}
