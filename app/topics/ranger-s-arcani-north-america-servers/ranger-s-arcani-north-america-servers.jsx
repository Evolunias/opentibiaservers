import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-north-america-servers');
}

export default function RangerSArcaniNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-north-america-servers" />;
}
