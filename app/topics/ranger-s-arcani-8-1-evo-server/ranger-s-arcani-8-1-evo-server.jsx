import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-8-1-evo-server');
}

export default function RangerSArcani81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-8-1-evo-server" />;
}
