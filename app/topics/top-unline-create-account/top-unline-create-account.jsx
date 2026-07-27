import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-unline-create-account');
}

export default function TopUnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-unline-create-account" />;
}
