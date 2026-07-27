import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zezenia-online-create-account');
}

export default function PopularZezeniaOnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-zezenia-online-create-account" />;
}
