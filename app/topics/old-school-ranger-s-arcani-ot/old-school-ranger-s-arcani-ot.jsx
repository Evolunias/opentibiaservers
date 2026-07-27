import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ranger-s-arcani-ot');
}

export default function OldSchoolRangerSArcaniOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-ranger-s-arcani-ot" />;
}
