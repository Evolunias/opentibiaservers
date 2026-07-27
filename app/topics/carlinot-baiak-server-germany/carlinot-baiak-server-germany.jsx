import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-baiak-server-germany');
}

export default function CarlinotBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="carlinot-baiak-server-germany" />;
}
