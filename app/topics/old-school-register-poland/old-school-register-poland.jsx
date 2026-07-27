import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-register-poland');
}

export default function OldSchoolRegisterPolandKeywordPage() {
  return <StaticKeywordPage slug="old-school-register-poland" />;
}
