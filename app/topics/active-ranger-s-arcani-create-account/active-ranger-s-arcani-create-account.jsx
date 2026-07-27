import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ranger-s-arcani-create-account');
}

export default function ActiveRangerSArcaniCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-ranger-s-arcani-create-account" />;
}
