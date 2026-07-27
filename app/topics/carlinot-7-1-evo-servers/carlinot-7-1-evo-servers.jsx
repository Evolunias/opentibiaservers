import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-1-evo-servers');
}

export default function Carlinot71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-1-evo-servers" />;
}
