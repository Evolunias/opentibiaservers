import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ranger-s-arcani-create-account');
}

export default function PopularRangerSArcaniCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-ranger-s-arcani-create-account" />;
}
