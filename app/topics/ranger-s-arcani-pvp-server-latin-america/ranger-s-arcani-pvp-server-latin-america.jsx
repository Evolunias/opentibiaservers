import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvp-server-latin-america');
}

export default function RangerSArcaniPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvp-server-latin-america" />;
}
