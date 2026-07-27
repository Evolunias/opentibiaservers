import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zezenia-online-create-account');
}

export default function CurrentZezeniaOnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-zezenia-online-create-account" />;
}
