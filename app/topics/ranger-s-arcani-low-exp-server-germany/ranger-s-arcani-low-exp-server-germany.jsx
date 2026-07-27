import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-low-exp-server-germany');
}

export default function RangerSArcaniLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-low-exp-server-germany" />;
}
