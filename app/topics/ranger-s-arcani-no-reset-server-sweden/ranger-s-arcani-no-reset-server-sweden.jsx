import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-no-reset-server-sweden');
}

export default function RangerSArcaniNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-no-reset-server-sweden" />;
}
