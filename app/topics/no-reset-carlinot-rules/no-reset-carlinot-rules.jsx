import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-carlinot-rules');
}

export default function NoResetCarlinotRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-carlinot-rules" />;
}
