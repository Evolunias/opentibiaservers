import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvp');
}

export default function RangerSArcaniPvpKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvp" />;
}
