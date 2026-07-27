import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otmadness-rules');
}

export default function BestOtmadnessRulesKeywordPage() {
  return <StaticKeywordPage slug="best-otmadness-rules" />;
}
