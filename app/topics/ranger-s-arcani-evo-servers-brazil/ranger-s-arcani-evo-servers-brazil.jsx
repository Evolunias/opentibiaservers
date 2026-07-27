import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-evo-servers-brazil');
}

export default function RangerSArcaniEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-evo-servers-brazil" />;
}
