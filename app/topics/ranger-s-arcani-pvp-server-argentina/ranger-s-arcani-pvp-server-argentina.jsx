import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvp-server-argentina');
}

export default function RangerSArcaniPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvp-server-argentina" />;
}
