import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-high-exp-server-sweden');
}

export default function RangerSArcaniHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-high-exp-server-sweden" />;
}
