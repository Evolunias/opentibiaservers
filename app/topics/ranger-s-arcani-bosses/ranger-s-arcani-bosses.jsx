import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-bosses');
}

export default function RangerSArcaniBossesKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-bosses" />;
}
