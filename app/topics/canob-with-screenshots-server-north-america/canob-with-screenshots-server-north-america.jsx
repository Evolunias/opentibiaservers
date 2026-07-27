import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-screenshots-server-north-america');
}

export default function CanobWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-with-screenshots-server-north-america" />;
}
