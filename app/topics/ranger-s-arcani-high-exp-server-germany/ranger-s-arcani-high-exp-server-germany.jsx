import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-high-exp-server-germany');
}

export default function RangerSArcaniHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-high-exp-server-germany" />;
}
