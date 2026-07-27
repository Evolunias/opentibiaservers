import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nto-star-rules');
}

export default function LowrateNtoStarRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nto-star-rules" />;
}
