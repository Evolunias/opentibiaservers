import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-baiak-server-brazil');
}

export default function CarlinotBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="carlinot-baiak-server-brazil" />;
}
