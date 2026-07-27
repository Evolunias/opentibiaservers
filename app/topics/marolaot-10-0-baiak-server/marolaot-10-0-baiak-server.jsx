import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-10-0-baiak-server');
}

export default function Marolaot100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-10-0-baiak-server" />;
}
