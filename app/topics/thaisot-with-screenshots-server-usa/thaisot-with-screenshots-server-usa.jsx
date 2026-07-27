import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-screenshots-server-usa');
}

export default function ThaisotWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-screenshots-server-usa" />;
}
