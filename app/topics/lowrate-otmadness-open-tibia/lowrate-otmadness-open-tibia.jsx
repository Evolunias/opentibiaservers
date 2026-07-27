import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-otmadness-open-tibia');
}

export default function LowrateOtmadnessOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-otmadness-open-tibia" />;
}
