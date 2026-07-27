import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaorigins');
}

export default function OldSchoolTibiaoriginsKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaorigins" />;
}
