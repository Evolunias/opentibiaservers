import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-0-baiak-server');
}

export default function Carlinot80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-0-baiak-server" />;
}
