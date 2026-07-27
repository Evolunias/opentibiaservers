import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ranger-s-arcani-create-account');
}

export default function OfficialRangerSArcaniCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-ranger-s-arcani-create-account" />;
}
