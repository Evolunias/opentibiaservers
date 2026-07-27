import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-madnessalive-rules');
}

export default function OfficialMadnessaliveRulesKeywordPage() {
  return <StaticKeywordPage slug="official-madnessalive-rules" />;
}
