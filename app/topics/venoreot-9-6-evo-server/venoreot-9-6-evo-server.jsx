import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-9-6-evo-server');
}

export default function Venoreot96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-9-6-evo-server" />;
}
