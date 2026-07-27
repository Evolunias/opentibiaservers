import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-latin-america-server');
}

export default function CarlinotLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-latin-america-server" />;
}
