import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-14-baiak-server');
}

export default function Carlinot14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-14-baiak-server" />;
}
