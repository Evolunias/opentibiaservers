import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-reset');
}

export default function RangerSArcaniResetKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-reset" />;
}
