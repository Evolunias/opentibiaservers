import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiantis-register');
}

export default function OldSchoolTibiantisRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiantis-register" />;
}
