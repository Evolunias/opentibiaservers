import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-register-uk');
}

export default function OldSchoolRegisterUkKeywordPage() {
  return <StaticKeywordPage slug="old-school-register-uk" />;
}
