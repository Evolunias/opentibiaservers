import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-marolaot-client');
}

export default function TopMarolaotClientKeywordPage() {
  return <StaticKeywordPage slug="top-marolaot-client" />;
}
