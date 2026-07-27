import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-register-canada');
}

export default function OldSchoolRegisterCanadaKeywordPage() {
  return <StaticKeywordPage slug="old-school-register-canada" />;
}
