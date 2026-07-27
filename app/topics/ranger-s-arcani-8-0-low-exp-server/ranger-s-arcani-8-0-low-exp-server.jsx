import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-8-0-low-exp-server');
}

export default function RangerSArcani80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-8-0-low-exp-server" />;
}
