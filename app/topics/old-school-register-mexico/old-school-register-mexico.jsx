import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-register-mexico');
}

export default function OldSchoolRegisterMexicoKeywordPage() {
  return <StaticKeywordPage slug="old-school-register-mexico" />;
}
