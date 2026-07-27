import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-0-fresh-start-server');
}

export default function Carlinot80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-0-fresh-start-server" />;
}
