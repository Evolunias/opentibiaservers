import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-france-server');
}

export default function CarlinotFranceServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-france-server" />;
}
