import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-archlight-create-account');
}

export default function OldSchoolArchlightCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-archlight-create-account" />;
}
