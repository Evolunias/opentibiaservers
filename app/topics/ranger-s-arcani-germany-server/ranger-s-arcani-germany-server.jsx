import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-germany-server');
}

export default function RangerSArcaniGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-germany-server" />;
}
