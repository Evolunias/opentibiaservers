import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-argentina-servers');
}

export default function RangerSArcaniArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-argentina-servers" />;
}
