import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibianus-register');
}

export default function OldSchoolTibianusRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibianus-register" />;
}
