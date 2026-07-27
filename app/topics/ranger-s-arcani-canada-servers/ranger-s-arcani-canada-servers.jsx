import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-canada-servers');
}

export default function RangerSArcaniCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-canada-servers" />;
}
