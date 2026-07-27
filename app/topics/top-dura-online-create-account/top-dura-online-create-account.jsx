import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dura-online-create-account');
}

export default function TopDuraOnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-dura-online-create-account" />;
}
