import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ranger-s-arcani-create-account');
}

export default function CurrentRangerSArcaniCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-ranger-s-arcani-create-account" />;
}
