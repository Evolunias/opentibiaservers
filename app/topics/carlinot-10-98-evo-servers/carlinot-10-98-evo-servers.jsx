import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-10-98-evo-servers');
}

export default function Carlinot1098EvoServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-10-98-evo-servers" />;
}
