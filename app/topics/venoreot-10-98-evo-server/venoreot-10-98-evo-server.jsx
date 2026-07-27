import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-10-98-evo-server');
}

export default function Venoreot1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-10-98-evo-server" />;
}
