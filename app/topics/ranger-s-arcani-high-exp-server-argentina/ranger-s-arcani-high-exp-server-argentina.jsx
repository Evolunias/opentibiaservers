import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-high-exp-server-argentina');
}

export default function RangerSArcaniHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-high-exp-server-argentina" />;
}
