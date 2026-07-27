import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-infernal-ot-register');
}

export default function OldSchoolInfernalOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-infernal-ot-register" />;
}
