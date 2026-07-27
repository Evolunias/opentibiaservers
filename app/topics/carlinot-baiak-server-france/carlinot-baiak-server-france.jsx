import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-baiak-server-france');
}

export default function CarlinotBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="carlinot-baiak-server-france" />;
}
