import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-screenshots-server-mexico');
}

export default function CanobWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="canob-with-screenshots-server-mexico" />;
}
