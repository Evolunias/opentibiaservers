import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-archlight-create-account');
}

export default function NoResetArchlightCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-archlight-create-account" />;
}
