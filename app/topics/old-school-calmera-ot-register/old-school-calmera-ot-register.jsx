import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-calmera-ot-register');
}

export default function OldSchoolCalmeraOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-calmera-ot-register" />;
}
