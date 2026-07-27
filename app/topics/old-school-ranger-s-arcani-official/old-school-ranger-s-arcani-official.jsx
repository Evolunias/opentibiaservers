import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ranger-s-arcani-official');
}

export default function OldSchoolRangerSArcaniOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-ranger-s-arcani-official" />;
}
