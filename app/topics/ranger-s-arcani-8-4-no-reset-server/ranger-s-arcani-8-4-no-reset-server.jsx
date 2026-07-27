import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-8-4-no-reset-server');
}

export default function RangerSArcani84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-8-4-no-reset-server" />;
}
