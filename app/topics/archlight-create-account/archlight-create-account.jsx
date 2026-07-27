import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-create-account');
}

export default function ArchlightCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="archlight-create-account" />;
}
