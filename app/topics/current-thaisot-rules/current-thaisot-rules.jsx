import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thaisot-rules');
}

export default function CurrentThaisotRulesKeywordPage() {
  return <StaticKeywordPage slug="current-thaisot-rules" />;
}
