import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eternal-odyssey-ot');
}

export default function HighrateEternalOdysseyOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-eternal-odyssey-ot" />;
}
