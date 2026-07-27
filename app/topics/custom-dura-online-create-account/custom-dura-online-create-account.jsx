import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dura-online-create-account');
}

export default function CustomDuraOnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-dura-online-create-account" />;
}
