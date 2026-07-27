import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ranger-s-arcani-create-account');
}

export default function BestRangerSArcaniCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-ranger-s-arcani-create-account" />;
}
