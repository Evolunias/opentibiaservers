import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-9-6-baiak-server');
}

export default function Carlinot96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-9-6-baiak-server" />;
}
