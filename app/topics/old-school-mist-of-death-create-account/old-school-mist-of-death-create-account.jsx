import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-mist-of-death-create-account');
}

export default function OldSchoolMistOfDeathCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-mist-of-death-create-account" />;
}
