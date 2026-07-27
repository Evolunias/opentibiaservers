import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nostalther-rules');
}

export default function LowrateNostaltherRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nostalther-rules" />;
}
