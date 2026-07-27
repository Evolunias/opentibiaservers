import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-1-baiak-server');
}

export default function Marolaot81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-1-baiak-server" />;
}
