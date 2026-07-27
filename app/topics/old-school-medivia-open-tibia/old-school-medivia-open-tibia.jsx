import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-medivia-open-tibia');
}

export default function OldSchoolMediviaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-medivia-open-tibia" />;
}
