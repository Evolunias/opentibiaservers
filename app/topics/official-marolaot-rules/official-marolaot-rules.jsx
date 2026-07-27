import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-marolaot-rules');
}

export default function OfficialMarolaotRulesKeywordPage() {
  return <StaticKeywordPage slug="official-marolaot-rules" />;
}
