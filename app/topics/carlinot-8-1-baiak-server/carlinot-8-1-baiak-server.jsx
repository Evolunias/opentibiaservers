import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-1-baiak-server');
}

export default function Carlinot81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-1-baiak-server" />;
}
