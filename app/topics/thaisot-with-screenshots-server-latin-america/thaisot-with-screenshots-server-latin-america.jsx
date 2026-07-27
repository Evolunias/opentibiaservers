import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-screenshots-server-latin-america');
}

export default function ThaisotWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-screenshots-server-latin-america" />;
}
