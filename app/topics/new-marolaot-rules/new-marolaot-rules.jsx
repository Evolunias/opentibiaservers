import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-marolaot-rules');
}

export default function NewMarolaotRulesKeywordPage() {
  return <StaticKeywordPage slug="new-marolaot-rules" />;
}
