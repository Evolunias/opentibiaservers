import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-evo-server-europe');
}

export default function RangerSArcaniEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-evo-server-europe" />;
}
