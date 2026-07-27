import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvp-server-north-america');
}

export default function RangerSArcaniPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvp-server-north-america" />;
}
