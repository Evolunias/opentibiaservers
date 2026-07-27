import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-low-exp-server-north-america');
}

export default function RangerSArcaniLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-low-exp-server-north-america" />;
}
