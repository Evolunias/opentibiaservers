import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-register-brazil');
}

export default function OldSchoolRegisterBrazilKeywordPage() {
  return <StaticKeywordPage slug="old-school-register-brazil" />;
}
