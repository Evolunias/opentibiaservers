import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-tibia');
}

export default function RangerSArcaniTibiaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-tibia" />;
}
