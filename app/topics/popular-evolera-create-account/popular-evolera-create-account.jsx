import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolera-create-account');
}

export default function PopularEvoleraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-evolera-create-account" />;
}
