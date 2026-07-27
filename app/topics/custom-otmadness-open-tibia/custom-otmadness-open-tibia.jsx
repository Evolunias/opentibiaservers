import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-otmadness-open-tibia');
}

export default function CustomOtmadnessOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-otmadness-open-tibia" />;
}
