import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-evo-server-argentina');
}

export default function RangerSArcaniEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-evo-server-argentina" />;
}
