import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaorigins-login');
}

export default function OldSchoolTibiaoriginsLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaorigins-login" />;
}
