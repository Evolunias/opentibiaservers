import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-screenshots-server-poland');
}

export default function ThaisotWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-screenshots-server-poland" />;
}
