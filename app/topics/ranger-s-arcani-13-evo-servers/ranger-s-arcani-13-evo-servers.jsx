import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-13-evo-servers');
}

export default function RangerSArcani13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-13-evo-servers" />;
}
