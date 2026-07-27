import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-9-6-fresh-start-server');
}

export default function Carlinot96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-9-6-fresh-start-server" />;
}
