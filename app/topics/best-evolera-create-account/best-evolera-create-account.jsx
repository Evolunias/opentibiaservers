import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolera-create-account');
}

export default function BestEvoleraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-evolera-create-account" />;
}
