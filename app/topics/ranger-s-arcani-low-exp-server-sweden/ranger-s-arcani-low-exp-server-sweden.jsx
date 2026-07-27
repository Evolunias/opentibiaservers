import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-low-exp-server-sweden');
}

export default function RangerSArcaniLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-low-exp-server-sweden" />;
}
