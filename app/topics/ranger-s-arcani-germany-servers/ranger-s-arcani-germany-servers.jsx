import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-germany-servers');
}

export default function RangerSArcaniGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-germany-servers" />;
}
