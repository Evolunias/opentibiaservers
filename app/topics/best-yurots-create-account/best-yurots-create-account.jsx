import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-yurots-create-account');
}

export default function BestYurotsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-yurots-create-account" />;
}
