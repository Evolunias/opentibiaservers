import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eternal-odyssey-create-account');
}

export default function OldSchoolEternalOdysseyCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-eternal-odyssey-create-account" />;
}
