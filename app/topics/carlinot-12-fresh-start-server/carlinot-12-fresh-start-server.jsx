import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-12-fresh-start-server');
}

export default function Carlinot12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-12-fresh-start-server" />;
}
