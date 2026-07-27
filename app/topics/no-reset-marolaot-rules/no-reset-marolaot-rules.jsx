import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-marolaot-rules');
}

export default function NoResetMarolaotRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-marolaot-rules" />;
}
