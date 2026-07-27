import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-12-evo-server');
}

export default function RangerSArcani12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-12-evo-server" />;
}
