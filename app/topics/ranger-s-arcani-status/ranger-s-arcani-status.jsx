import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-status');
}

export default function RangerSArcaniStatusKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-status" />;
}
