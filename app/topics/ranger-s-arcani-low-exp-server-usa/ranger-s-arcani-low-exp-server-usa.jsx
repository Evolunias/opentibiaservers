import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-low-exp-server-usa');
}

export default function RangerSArcaniLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-low-exp-server-usa" />;
}
