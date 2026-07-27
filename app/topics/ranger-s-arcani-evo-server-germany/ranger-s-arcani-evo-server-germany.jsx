import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-evo-server-germany');
}

export default function RangerSArcaniEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-evo-server-germany" />;
}
