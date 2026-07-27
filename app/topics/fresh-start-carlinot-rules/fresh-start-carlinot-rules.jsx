import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-carlinot-rules');
}

export default function FreshStartCarlinotRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-carlinot-rules" />;
}
