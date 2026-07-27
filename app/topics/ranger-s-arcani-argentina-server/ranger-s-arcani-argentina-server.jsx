import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-argentina-server');
}

export default function RangerSArcaniArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-argentina-server" />;
}
