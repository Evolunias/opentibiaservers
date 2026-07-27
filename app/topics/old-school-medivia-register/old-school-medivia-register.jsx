import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-medivia-register');
}

export default function OldSchoolMediviaRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-medivia-register" />;
}
