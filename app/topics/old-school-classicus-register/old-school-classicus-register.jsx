import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classicus-register');
}

export default function OldSchoolClassicusRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-classicus-register" />;
}
