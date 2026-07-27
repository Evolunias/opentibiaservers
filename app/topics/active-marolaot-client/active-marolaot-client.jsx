import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-marolaot-client');
}

export default function ActiveMarolaotClientKeywordPage() {
  return <StaticKeywordPage slug="active-marolaot-client" />;
}
