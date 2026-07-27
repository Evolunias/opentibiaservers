import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dura-online-create-account');
}

export default function OldSchoolDuraOnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-dura-online-create-account" />;
}
