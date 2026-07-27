import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eternal-odyssey-rules');
}

export default function OfficialEternalOdysseyRulesKeywordPage() {
  return <StaticKeywordPage slug="official-eternal-odyssey-rules" />;
}
