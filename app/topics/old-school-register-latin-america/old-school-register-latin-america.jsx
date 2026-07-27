import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-register-latin-america');
}

export default function OldSchoolRegisterLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-register-latin-america" />;
}
