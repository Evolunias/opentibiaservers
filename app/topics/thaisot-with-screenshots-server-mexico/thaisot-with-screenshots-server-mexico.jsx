import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-screenshots-server-mexico');
}

export default function ThaisotWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-screenshots-server-mexico" />;
}
