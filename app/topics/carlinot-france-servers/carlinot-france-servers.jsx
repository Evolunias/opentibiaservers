import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-france-servers');
}

export default function CarlinotFranceServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-france-servers" />;
}
