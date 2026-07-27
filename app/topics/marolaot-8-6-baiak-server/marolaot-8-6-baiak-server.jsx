import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-6-baiak-server');
}

export default function Marolaot86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-6-baiak-server" />;
}
