import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ranger-s-arcani-tibia');
}

export default function OldSchoolRangerSArcaniTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-ranger-s-arcani-tibia" />;
}
