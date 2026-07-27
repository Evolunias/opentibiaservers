import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thaisot-create-account');
}

export default function TopThaisotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-thaisot-create-account" />;
}
