import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-high-exp-server-europe');
}

export default function RangerSArcaniHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-high-exp-server-europe" />;
}
