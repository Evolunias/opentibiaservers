import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-12-baiak-server');
}

export default function Marolaot12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-12-baiak-server" />;
}
