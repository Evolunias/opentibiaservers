import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-14-evo-servers');
}

export default function RangerSArcani14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-14-evo-servers" />;
}
