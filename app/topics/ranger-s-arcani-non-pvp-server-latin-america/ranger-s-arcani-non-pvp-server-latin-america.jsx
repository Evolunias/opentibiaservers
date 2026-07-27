import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-non-pvp-server-latin-america');
}

export default function RangerSArcaniNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-non-pvp-server-latin-america" />;
}
