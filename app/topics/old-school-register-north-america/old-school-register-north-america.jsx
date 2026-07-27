import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-register-north-america');
}

export default function OldSchoolRegisterNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-register-north-america" />;
}
