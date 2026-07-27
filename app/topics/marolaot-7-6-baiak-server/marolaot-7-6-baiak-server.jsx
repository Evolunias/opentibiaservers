import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-6-baiak-server');
}

export default function Marolaot76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-6-baiak-server" />;
}
