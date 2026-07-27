import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-client');
}

export default function CarlinotClientKeywordPage() {
  return <StaticKeywordPage slug="carlinot-client" />;
}
