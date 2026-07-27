import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-download');
}

export default function RangerSArcaniDownloadKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-download" />;
}
