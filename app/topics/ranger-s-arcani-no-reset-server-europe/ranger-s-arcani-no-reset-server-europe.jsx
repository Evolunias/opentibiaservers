import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-no-reset-server-europe');
}

export default function RangerSArcaniNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-no-reset-server-europe" />;
}
