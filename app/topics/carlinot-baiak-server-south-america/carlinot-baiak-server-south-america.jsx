import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-baiak-server-south-america');
}

export default function CarlinotBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-baiak-server-south-america" />;
}
