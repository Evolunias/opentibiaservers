import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-evo-server-latin-america');
}

export default function RangerSArcaniEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-evo-server-latin-america" />;
}
