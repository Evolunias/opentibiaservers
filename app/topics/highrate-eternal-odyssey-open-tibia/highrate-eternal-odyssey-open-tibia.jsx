import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eternal-odyssey-open-tibia');
}

export default function HighrateEternalOdysseyOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-eternal-odyssey-open-tibia" />;
}
