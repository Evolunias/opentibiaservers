import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-sabrehaven-register');
}

export default function OldSchoolSabrehavenRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-sabrehaven-register" />;
}
