import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-unline-create-account');
}

export default function CurrentUnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-unline-create-account" />;
}
