import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-carlinot-register');
}

export default function OldSchoolCarlinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-carlinot-register" />;
}
