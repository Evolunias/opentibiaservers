import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolera-create-account');
}

export default function TopEvoleraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-evolera-create-account" />;
}
