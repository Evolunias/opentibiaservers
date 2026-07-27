import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-6-baiak-server');
}

export default function Carlinot76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-6-baiak-server" />;
}
