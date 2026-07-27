import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-otmadness-tibia');
}

export default function HighrateOtmadnessTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-otmadness-tibia" />;
}
