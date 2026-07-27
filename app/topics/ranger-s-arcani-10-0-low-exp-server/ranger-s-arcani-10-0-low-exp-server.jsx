import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-10-0-low-exp-server');
}

export default function RangerSArcani100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-10-0-low-exp-server" />;
}
