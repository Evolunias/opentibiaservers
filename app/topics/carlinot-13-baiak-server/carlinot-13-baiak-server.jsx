import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-13-baiak-server');
}

export default function Carlinot13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-13-baiak-server" />;
}
