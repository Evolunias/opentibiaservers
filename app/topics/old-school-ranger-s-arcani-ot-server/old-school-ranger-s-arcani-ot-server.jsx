import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ranger-s-arcani-ot-server');
}

export default function OldSchoolRangerSArcaniOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-ranger-s-arcani-ot-server" />;
}
