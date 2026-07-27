import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-evo-server-brazil');
}

export default function RangerSArcaniEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-evo-server-brazil" />;
}
