import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-10-0-no-reset-server');
}

export default function RangerSArcani100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-10-0-no-reset-server" />;
}
