import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-baiak-server-europe');
}

export default function CarlinotBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="carlinot-baiak-server-europe" />;
}
