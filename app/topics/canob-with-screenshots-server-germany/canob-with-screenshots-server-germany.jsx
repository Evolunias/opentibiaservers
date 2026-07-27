import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-screenshots-server-germany');
}

export default function CanobWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="canob-with-screenshots-server-germany" />;
}
