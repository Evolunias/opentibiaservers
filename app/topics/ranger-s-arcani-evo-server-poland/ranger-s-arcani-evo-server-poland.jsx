import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-evo-server-poland');
}

export default function RangerSArcaniEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-evo-server-poland" />;
}
