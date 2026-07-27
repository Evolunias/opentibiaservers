import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ranger-s-arcani-ots');
}

export default function OldSchoolRangerSArcaniOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-ranger-s-arcani-ots" />;
}
