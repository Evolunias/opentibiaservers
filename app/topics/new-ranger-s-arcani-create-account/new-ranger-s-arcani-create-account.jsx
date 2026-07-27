import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ranger-s-arcani-create-account');
}

export default function NewRangerSArcaniCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-ranger-s-arcani-create-account" />;
}
