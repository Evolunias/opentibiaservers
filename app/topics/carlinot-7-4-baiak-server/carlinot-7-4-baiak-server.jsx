import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-4-baiak-server');
}

export default function Carlinot74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-4-baiak-server" />;
}
