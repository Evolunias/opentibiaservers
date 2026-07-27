import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-otmadness-open-tibia');
}

export default function OfficialOtmadnessOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-otmadness-open-tibia" />;
}
