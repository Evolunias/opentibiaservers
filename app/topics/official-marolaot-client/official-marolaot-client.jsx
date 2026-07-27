import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-marolaot-client');
}

export default function OfficialMarolaotClientKeywordPage() {
  return <StaticKeywordPage slug="official-marolaot-client" />;
}
