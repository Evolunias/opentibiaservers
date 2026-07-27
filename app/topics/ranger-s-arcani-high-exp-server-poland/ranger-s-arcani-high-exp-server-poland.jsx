import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-high-exp-server-poland');
}

export default function RangerSArcaniHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-high-exp-server-poland" />;
}
