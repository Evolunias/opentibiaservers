import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-otmadness-open-tibia');
}

export default function TopOtmadnessOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-otmadness-open-tibia" />;
}
