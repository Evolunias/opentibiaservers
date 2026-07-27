import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ranger-s-arcani-open-tibia');
}

export default function OldSchoolRangerSArcaniOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-ranger-s-arcani-open-tibia" />;
}
