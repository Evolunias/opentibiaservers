import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-kasteria-register');
}

export default function OldSchoolKasteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-kasteria-register" />;
}
