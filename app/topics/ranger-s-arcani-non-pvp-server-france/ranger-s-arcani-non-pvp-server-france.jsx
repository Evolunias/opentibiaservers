import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-non-pvp-server-france');
}

export default function RangerSArcaniNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-non-pvp-server-france" />;
}
