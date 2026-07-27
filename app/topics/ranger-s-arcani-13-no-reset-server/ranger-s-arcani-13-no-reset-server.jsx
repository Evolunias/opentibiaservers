import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-13-no-reset-server');
}

export default function RangerSArcani13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-13-no-reset-server" />;
}
