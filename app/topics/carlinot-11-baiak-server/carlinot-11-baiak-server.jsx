import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-11-baiak-server');
}

export default function Carlinot11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-11-baiak-server" />;
}
