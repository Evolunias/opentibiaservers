import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-10-0-fresh-start-server');
}

export default function Carlinot100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-10-0-fresh-start-server" />;
}
