import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvp-server-poland');
}

export default function RangerSArcaniPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvp-server-poland" />;
}
