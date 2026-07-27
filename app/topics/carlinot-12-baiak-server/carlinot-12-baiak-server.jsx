import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-12-baiak-server');
}

export default function Carlinot12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-12-baiak-server" />;
}
