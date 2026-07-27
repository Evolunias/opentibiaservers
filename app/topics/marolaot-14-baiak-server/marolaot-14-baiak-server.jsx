import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-14-baiak-server');
}

export default function Marolaot14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-14-baiak-server" />;
}
