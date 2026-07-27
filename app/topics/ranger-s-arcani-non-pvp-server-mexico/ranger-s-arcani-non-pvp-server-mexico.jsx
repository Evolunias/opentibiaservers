import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-non-pvp-server-mexico');
}

export default function RangerSArcaniNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-non-pvp-server-mexico" />;
}
