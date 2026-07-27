import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-screenshots-server-north-america');
}

export default function ThaisotWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-screenshots-server-north-america" />;
}
