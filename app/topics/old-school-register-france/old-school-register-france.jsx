import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-register-france');
}

export default function OldSchoolRegisterFranceKeywordPage() {
  return <StaticKeywordPage slug="old-school-register-france" />;
}
