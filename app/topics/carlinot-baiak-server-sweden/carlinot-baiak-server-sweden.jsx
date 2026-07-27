import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-baiak-server-sweden');
}

export default function CarlinotBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="carlinot-baiak-server-sweden" />;
}
