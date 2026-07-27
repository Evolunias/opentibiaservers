import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-north-america-server');
}

export default function RangerSArcaniNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-north-america-server" />;
}
