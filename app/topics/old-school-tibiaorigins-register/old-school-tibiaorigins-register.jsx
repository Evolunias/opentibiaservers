import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaorigins-register');
}

export default function OldSchoolTibiaoriginsRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaorigins-register" />;
}
