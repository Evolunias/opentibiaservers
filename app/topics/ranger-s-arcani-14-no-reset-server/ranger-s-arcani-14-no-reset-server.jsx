import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-14-no-reset-server');
}

export default function RangerSArcani14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-14-no-reset-server" />;
}
