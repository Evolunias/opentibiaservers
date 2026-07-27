import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-11-baiak-server');
}

export default function Marolaot11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-11-baiak-server" />;
}
