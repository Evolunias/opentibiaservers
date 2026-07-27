import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-otmadness-open-tibia');
}

export default function HighrateOtmadnessOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-otmadness-open-tibia" />;
}
