import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nto-star-create-account');
}

export default function OldSchoolNtoStarCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-nto-star-create-account" />;
}
