import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-register-usa');
}

export default function OldSchoolRegisterUsaKeywordPage() {
  return <StaticKeywordPage slug="old-school-register-usa" />;
}
