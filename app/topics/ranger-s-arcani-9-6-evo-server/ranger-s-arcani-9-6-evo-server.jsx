import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-9-6-evo-server');
}

export default function RangerSArcani96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-9-6-evo-server" />;
}
