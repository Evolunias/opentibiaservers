import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-infernal-ot-login');
}

export default function OldSchoolInfernalOtLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-infernal-ot-login" />;
}
