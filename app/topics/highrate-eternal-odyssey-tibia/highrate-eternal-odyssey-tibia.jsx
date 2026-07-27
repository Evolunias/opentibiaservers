import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eternal-odyssey-tibia');
}

export default function HighrateEternalOdysseyTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-eternal-odyssey-tibia" />;
}
