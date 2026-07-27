import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-high-exp-server-usa');
}

export default function RangerSArcaniHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-high-exp-server-usa" />;
}
