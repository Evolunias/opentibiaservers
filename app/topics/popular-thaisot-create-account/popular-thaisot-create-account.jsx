import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thaisot-create-account');
}

export default function PopularThaisotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-thaisot-create-account" />;
}
