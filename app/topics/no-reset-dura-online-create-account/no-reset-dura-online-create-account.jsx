import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dura-online-create-account');
}

export default function NoResetDuraOnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dura-online-create-account" />;
}
