import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-15-evo-server');
}

export default function RangerSArcani15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-15-evo-server" />;
}
