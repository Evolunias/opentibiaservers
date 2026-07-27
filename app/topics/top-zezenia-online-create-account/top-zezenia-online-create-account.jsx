import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zezenia-online-create-account');
}

export default function TopZezeniaOnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-zezenia-online-create-account" />;
}
