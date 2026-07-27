import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-4-baiak-server');
}

export default function Marolaot84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-4-baiak-server" />;
}
