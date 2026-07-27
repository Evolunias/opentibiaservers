import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-screenshots-server-canada');
}

export default function ThaisotWithScreenshotsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-screenshots-server-canada" />;
}
