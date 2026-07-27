import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realesta-rules');
}

export default function LowrateRealestaRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realesta-rules" />;
}
