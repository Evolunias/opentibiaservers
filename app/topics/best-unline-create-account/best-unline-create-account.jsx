import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-unline-create-account');
}

export default function BestUnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-unline-create-account" />;
}
