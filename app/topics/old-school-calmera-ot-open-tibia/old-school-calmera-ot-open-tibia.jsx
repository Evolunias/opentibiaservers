import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-calmera-ot-open-tibia');
}

export default function OldSchoolCalmeraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-calmera-ot-open-tibia" />;
}
