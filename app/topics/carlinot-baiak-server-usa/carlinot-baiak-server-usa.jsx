import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-baiak-server-usa');
}

export default function CarlinotBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-baiak-server-usa" />;
}
