import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-baiak-server-argentina');
}

export default function CarlinotBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-baiak-server-argentina" />;
}
