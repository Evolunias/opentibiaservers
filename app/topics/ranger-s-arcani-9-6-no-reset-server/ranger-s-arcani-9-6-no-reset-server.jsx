import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-9-6-no-reset-server');
}

export default function RangerSArcani96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-9-6-no-reset-server" />;
}
