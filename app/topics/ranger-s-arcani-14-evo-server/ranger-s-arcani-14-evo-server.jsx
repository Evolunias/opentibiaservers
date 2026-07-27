import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-14-evo-server');
}

export default function RangerSArcani14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-14-evo-server" />;
}
