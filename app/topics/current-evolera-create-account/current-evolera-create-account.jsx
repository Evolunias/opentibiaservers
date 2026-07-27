import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolera-create-account');
}

export default function CurrentEvoleraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-evolera-create-account" />;
}
