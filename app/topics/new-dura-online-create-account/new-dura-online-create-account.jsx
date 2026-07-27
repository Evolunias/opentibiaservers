import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dura-online-create-account');
}

export default function NewDuraOnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-dura-online-create-account" />;
}
