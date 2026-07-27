import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-no-reset-server-north-america');
}

export default function RangerSArcaniNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-no-reset-server-north-america" />;
}
