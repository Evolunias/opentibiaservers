import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-baiak-server-canada');
}

export default function CarlinotBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-baiak-server-canada" />;
}
