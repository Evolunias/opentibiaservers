import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-7-6-evo-server');
}

export default function RangerSArcani76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-7-6-evo-server" />;
}
