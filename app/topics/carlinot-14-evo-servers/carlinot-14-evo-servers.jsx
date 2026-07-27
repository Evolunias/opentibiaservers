import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-14-evo-servers');
}

export default function Carlinot14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-14-evo-servers" />;
}
