import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-no-reset-server-france');
}

export default function RangerSArcaniNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-no-reset-server-france" />;
}
