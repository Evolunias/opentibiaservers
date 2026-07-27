import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-screenshots');
}

export default function RangerSArcaniScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-screenshots" />;
}
