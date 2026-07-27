import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-evo-server-north-america');
}

export default function RangerSArcaniEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-evo-server-north-america" />;
}
