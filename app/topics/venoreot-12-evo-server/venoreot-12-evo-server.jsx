import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-12-evo-server');
}

export default function Venoreot12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-12-evo-server" />;
}
