import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-archlight-create-account');
}

export default function LowrateArchlightCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-archlight-create-account" />;
}
