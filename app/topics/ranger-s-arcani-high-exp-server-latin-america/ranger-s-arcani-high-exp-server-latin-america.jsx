import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-high-exp-server-latin-america');
}

export default function RangerSArcaniHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-high-exp-server-latin-america" />;
}
