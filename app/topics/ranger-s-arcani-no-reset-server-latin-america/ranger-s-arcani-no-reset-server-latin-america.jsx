import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-no-reset-server-latin-america');
}

export default function RangerSArcaniNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-no-reset-server-latin-america" />;
}
