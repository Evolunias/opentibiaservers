import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-7-4-evo-servers');
}

export default function RangerSArcani74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-7-4-evo-servers" />;
}
