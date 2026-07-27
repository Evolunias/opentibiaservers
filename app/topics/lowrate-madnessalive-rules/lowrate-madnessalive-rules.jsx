import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-madnessalive-rules');
}

export default function LowrateMadnessaliveRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-madnessalive-rules" />;
}
