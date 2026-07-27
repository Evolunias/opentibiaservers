import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-screenshots-server-europe');
}

export default function ThaisotWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-screenshots-server-europe" />;
}
