import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-canada-server');
}

export default function RangerSArcaniCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-canada-server" />;
}
