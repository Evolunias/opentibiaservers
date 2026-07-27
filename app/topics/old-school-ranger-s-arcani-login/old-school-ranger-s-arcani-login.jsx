import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ranger-s-arcani-login');
}

export default function OldSchoolRangerSArcaniLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-ranger-s-arcani-login" />;
}
