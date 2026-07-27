import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-north-america-server');
}

export default function CarlinotNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-north-america-server" />;
}
