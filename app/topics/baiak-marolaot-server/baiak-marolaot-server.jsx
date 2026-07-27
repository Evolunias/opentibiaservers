import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-marolaot-server');
}

export default function BaiakMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-marolaot-server" />;
}
