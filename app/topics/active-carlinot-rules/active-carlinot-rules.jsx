import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-carlinot-rules');
}

export default function ActiveCarlinotRulesKeywordPage() {
  return <StaticKeywordPage slug="active-carlinot-rules" />;
}
