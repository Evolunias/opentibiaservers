import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zezenia-online-create-account');
}

export default function NewZezeniaOnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-zezenia-online-create-account" />;
}
