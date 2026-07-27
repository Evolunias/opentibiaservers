import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ranger-s-arcani-register');
}

export default function OldSchoolRangerSArcaniRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-ranger-s-arcani-register" />;
}
