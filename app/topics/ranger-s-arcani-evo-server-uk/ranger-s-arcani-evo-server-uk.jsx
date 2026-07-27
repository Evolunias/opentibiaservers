import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-evo-server-uk');
}

export default function RangerSArcaniEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-evo-server-uk" />;
}
