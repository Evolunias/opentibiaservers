import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-create-account');
}

export default function DuraOnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="dura-online-create-account" />;
}
