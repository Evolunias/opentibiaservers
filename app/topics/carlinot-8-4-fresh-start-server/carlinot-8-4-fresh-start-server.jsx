import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-4-fresh-start-server');
}

export default function Carlinot84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-4-fresh-start-server" />;
}
