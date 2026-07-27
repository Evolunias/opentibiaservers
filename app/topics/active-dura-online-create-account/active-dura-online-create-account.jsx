import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dura-online-create-account');
}

export default function ActiveDuraOnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-dura-online-create-account" />;
}
