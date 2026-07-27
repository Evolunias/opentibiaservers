import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zezenia-online-create-account');
}

export default function OldSchoolZezeniaOnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-zezenia-online-create-account" />;
}
