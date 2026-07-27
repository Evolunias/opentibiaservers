import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-screenshots-server-canada');
}

export default function CanobWithScreenshotsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="canob-with-screenshots-server-canada" />;
}
