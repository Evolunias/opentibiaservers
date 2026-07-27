import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-rules');
}

export default function OtmadnessRulesKeywordPage() {
  return <StaticKeywordPage slug="otmadness-rules" />;
}
