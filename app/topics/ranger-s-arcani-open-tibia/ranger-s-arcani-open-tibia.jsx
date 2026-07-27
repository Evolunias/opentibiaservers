import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-open-tibia');
}

export default function RangerSArcaniOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-open-tibia" />;
}
