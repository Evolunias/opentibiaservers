import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-marolaot-server');
}

export default function CurrentMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="current-marolaot-server" />;
}
