import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ranger-s-arcani-create-account');
}

export default function CustomRangerSArcaniCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-ranger-s-arcani-create-account" />;
}
