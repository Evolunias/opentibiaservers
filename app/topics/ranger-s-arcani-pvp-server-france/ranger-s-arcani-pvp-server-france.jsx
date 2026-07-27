import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvp-server-france');
}

export default function RangerSArcaniPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvp-server-france" />;
}
