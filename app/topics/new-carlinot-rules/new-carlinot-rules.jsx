import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-carlinot-rules');
}

export default function NewCarlinotRulesKeywordPage() {
  return <StaticKeywordPage slug="new-carlinot-rules" />;
}
