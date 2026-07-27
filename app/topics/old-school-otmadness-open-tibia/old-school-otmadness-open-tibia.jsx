import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-otmadness-open-tibia');
}

export default function OldSchoolOtmadnessOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-otmadness-open-tibia" />;
}
