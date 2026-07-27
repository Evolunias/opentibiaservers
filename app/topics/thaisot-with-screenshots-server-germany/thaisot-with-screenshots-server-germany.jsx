import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-screenshots-server-germany');
}

export default function ThaisotWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-screenshots-server-germany" />;
}
