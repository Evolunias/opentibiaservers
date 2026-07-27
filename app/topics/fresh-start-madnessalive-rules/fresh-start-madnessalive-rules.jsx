import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-madnessalive-rules');
}

export default function FreshStartMadnessaliveRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-madnessalive-rules" />;
}
