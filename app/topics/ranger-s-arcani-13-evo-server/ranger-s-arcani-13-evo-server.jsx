import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-13-evo-server');
}

export default function RangerSArcani13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-13-evo-server" />;
}
