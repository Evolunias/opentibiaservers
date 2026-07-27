import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zezenia-online-create-account');
}

export default function NoResetZezeniaOnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zezenia-online-create-account" />;
}
