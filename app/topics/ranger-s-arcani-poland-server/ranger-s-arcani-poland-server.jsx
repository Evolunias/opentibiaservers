import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-poland-server');
}

export default function RangerSArcaniPolandServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-poland-server" />;
}
