import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-baiak-server-mexico');
}

export default function CarlinotBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="carlinot-baiak-server-mexico" />;
}
