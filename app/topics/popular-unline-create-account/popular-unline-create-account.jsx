import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-unline-create-account');
}

export default function PopularUnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-unline-create-account" />;
}
