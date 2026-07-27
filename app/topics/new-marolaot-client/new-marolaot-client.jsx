import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-marolaot-client');
}

export default function NewMarolaotClientKeywordPage() {
  return <StaticKeywordPage slug="new-marolaot-client" />;
}
