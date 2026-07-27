import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-15-baiak-server');
}

export default function Marolaot15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-15-baiak-server" />;
}
