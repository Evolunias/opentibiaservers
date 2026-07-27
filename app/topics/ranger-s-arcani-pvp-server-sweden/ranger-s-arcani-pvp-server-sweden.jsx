import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvp-server-sweden');
}

export default function RangerSArcaniPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvp-server-sweden" />;
}
