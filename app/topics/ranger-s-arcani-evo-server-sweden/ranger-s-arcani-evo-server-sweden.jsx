import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-evo-server-sweden');
}

export default function RangerSArcaniEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-evo-server-sweden" />;
}
