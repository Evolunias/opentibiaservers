import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-ot');
}

export default function RangerSArcaniOtKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-ot" />;
}
