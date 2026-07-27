import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-no-reset-server-germany');
}

export default function RangerSArcaniNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-no-reset-server-germany" />;
}
