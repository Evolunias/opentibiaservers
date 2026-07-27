import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-screenshots-server-poland');
}

export default function CanobWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="canob-with-screenshots-server-poland" />;
}
