import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-11-evo-servers');
}

export default function Carlinot11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-11-evo-servers" />;
}
