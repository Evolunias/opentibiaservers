import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-6-baiak-server');
}

export default function Carlinot86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-6-baiak-server" />;
}
