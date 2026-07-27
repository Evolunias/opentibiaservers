import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-10-98-evo-server');
}

export default function Carlinot1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-10-98-evo-server" />;
}
