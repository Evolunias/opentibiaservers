import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-otmadness-register');
}

export default function OldSchoolOtmadnessRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-otmadness-register" />;
}
