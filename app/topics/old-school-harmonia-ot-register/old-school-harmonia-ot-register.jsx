import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-harmonia-ot-register');
}

export default function OldSchoolHarmoniaOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-harmonia-ot-register" />;
}
