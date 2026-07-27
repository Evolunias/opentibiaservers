import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-11-no-reset-server');
}

export default function RangerSArcani11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-11-no-reset-server" />;
}
