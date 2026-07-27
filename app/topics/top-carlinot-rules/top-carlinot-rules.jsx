import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-carlinot-rules');
}

export default function TopCarlinotRulesKeywordPage() {
  return <StaticKeywordPage slug="top-carlinot-rules" />;
}
