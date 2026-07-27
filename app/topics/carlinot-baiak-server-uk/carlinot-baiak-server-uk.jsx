import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-baiak-server-uk');
}

export default function CarlinotBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="carlinot-baiak-server-uk" />;
}
