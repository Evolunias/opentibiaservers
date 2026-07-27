import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classick-drakoria-create-account');
}

export default function OldSchoolClassickDrakoriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-classick-drakoria-create-account" />;
}
