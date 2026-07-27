import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-carlinot-rules');
}

export default function CurrentCarlinotRulesKeywordPage() {
  return <StaticKeywordPage slug="current-carlinot-rules" />;
}
