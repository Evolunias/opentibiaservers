import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dura-online-create-account');
}

export default function CurrentDuraOnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-dura-online-create-account" />;
}
