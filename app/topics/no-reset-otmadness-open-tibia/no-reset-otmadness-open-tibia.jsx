import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-otmadness-open-tibia');
}

export default function NoResetOtmadnessOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-otmadness-open-tibia" />;
}
