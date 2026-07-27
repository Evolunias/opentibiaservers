import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaorigins-create-account');
}

export default function OldSchoolTibiaoriginsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaorigins-create-account" />;
}
