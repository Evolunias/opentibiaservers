import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-11-fresh-start-server');
}

export default function Carlinot11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-11-fresh-start-server" />;
}
