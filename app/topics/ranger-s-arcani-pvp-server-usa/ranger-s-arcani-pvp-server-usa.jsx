import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvp-server-usa');
}

export default function RangerSArcaniPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvp-server-usa" />;
}
