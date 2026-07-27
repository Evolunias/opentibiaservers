import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ranger-s-arcani-create-account');
}

export default function LowrateRangerSArcaniCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ranger-s-arcani-create-account" />;
}
