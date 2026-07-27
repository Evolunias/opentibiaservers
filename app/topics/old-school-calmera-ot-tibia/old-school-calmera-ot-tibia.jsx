import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-calmera-ot-tibia');
}

export default function OldSchoolCalmeraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-calmera-ot-tibia" />;
}
