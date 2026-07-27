import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-carlinot-rules');
}

export default function BestCarlinotRulesKeywordPage() {
  return <StaticKeywordPage slug="best-carlinot-rules" />;
}
