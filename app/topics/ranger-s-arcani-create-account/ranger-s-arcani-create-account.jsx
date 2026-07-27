import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-create-account');
}

export default function RangerSArcaniCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-create-account" />;
}
