import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dura-online-create-account');
}

export default function FreshStartDuraOnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dura-online-create-account" />;
}
