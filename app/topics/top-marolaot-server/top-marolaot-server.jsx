import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-marolaot-server');
}

export default function TopMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="top-marolaot-server" />;
}
