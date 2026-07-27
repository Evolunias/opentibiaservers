import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realera-rules');
}

export default function LowrateRealeraRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realera-rules" />;
}
