import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-15-baiak-server');
}

export default function Carlinot15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-15-baiak-server" />;
}
