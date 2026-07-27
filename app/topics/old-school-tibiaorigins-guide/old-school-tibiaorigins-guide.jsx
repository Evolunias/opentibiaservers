import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaorigins-guide');
}

export default function OldSchoolTibiaoriginsGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaorigins-guide" />;
}
