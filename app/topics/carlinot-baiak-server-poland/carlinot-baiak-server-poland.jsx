import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-baiak-server-poland');
}

export default function CarlinotBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="carlinot-baiak-server-poland" />;
}
