import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-6-evo-servers');
}

export default function Carlinot86EvoServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-6-evo-servers" />;
}
