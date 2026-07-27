import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-15-fresh-start-server');
}

export default function Carlinot15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-15-fresh-start-server" />;
}
