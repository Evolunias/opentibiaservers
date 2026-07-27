import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-ots');
}

export default function RangerSArcaniOtsKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-ots" />;
}
