import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-1-baiak-server');
}

export default function Carlinot71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-1-baiak-server" />;
}
