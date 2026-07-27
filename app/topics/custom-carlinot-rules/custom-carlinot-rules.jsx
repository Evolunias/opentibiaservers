import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-carlinot-rules');
}

export default function CustomCarlinotRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-carlinot-rules" />;
}
