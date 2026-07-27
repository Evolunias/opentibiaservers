import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-evo-server-mexico');
}

export default function RangerSArcaniEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-evo-server-mexico" />;
}
