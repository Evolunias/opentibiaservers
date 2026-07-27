import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thaisot-rules');
}

export default function LowrateThaisotRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thaisot-rules" />;
}
