import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-evo-server-canada');
}

export default function RangerSArcaniEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-evo-server-canada" />;
}
