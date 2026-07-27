import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-evo-server-usa');
}

export default function RangerSArcaniEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-evo-server-usa" />;
}
