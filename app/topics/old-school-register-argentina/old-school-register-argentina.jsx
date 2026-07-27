import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-register-argentina');
}

export default function OldSchoolRegisterArgentinaKeywordPage() {
  return <StaticKeywordPage slug="old-school-register-argentina" />;
}
