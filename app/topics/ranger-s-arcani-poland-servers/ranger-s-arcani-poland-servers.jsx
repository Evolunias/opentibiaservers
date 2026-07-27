import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-poland-servers');
}

export default function RangerSArcaniPolandServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-poland-servers" />;
}
