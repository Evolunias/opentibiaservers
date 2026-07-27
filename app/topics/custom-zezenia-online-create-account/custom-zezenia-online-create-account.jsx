import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zezenia-online-create-account');
}

export default function CustomZezeniaOnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-zezenia-online-create-account" />;
}
