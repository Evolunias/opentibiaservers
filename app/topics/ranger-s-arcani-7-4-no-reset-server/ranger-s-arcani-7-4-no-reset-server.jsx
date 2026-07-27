import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-7-4-no-reset-server');
}

export default function RangerSArcani74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-7-4-no-reset-server" />;
}
