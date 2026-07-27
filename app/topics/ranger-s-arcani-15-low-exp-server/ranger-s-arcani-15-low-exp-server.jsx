import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-15-low-exp-server');
}

export default function RangerSArcani15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-15-low-exp-server" />;
}
