import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zezenia-online-create-account');
}

export default function ActiveZezeniaOnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-zezenia-online-create-account" />;
}
