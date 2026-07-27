import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thaisot-create-account');
}

export default function BestThaisotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-thaisot-create-account" />;
}
