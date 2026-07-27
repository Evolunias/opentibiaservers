import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-low-exp-server-europe');
}

export default function RangerSArcaniLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-low-exp-server-europe" />;
}
