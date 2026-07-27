import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-official');
}

export default function RangerSArcaniOfficialKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-official" />;
}
