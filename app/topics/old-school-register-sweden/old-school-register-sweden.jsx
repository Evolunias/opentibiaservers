import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-register-sweden');
}

export default function OldSchoolRegisterSwedenKeywordPage() {
  return <StaticKeywordPage slug="old-school-register-sweden" />;
}
