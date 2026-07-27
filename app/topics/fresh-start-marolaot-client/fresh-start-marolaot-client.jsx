import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-marolaot-client');
}

export default function FreshStartMarolaotClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-marolaot-client" />;
}
