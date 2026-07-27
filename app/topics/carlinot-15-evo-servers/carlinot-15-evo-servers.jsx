import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-15-evo-servers');
}

export default function Carlinot15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-15-evo-servers" />;
}
