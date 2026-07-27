import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-screenshots-server-latin-america');
}

export default function CanobWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-with-screenshots-server-latin-america" />;
}
