import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-8-0-high-exp-server');
}

export default function RangerSArcani80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-8-0-high-exp-server" />;
}
