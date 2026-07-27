import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-marolaot-client');
}

export default function CurrentMarolaotClientKeywordPage() {
  return <StaticKeywordPage slug="current-marolaot-client" />;
}
