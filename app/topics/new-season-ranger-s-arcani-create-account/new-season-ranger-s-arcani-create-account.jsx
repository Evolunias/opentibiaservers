import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ranger-s-arcani-create-account');
}

export default function NewSeasonRangerSArcaniCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-ranger-s-arcani-create-account" />;
}
