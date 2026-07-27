import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani');
}

export default function RangerSArcaniKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani" />;
}
