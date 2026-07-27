import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-11-low-exp-server');
}

export default function RangerSArcani11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-11-low-exp-server" />;
}
