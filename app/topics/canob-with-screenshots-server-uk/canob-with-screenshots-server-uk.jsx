import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-screenshots-server-uk');
}

export default function CanobWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="canob-with-screenshots-server-uk" />;
}
