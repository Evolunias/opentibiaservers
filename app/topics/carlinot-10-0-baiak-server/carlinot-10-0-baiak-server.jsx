import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-10-0-baiak-server');
}

export default function Carlinot100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-10-0-baiak-server" />;
}
