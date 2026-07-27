import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thornia-create-account');
}

export default function OldSchoolThorniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-thornia-create-account" />;
}
