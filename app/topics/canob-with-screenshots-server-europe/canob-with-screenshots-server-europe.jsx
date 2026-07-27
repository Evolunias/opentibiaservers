import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-screenshots-server-europe');
}

export default function CanobWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="canob-with-screenshots-server-europe" />;
}
