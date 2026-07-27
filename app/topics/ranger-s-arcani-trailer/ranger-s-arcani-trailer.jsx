import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-trailer');
}

export default function RangerSArcaniTrailerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-trailer" />;
}
