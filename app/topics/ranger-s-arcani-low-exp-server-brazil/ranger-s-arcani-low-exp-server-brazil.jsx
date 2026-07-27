import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-low-exp-server-brazil');
}

export default function RangerSArcaniLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-low-exp-server-brazil" />;
}
