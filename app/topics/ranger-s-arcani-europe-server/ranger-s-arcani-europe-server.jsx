import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-europe-server');
}

export default function RangerSArcaniEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-europe-server" />;
}
