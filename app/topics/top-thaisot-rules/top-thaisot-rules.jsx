import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thaisot-rules');
}

export default function TopThaisotRulesKeywordPage() {
  return <StaticKeywordPage slug="top-thaisot-rules" />;
}
