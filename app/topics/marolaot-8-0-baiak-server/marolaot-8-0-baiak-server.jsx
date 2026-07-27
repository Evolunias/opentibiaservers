import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-0-baiak-server');
}

export default function Marolaot80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-0-baiak-server" />;
}
