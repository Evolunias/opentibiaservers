import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-otmadness-open-tibia');
}

export default function CurrentOtmadnessOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-otmadness-open-tibia" />;
}
