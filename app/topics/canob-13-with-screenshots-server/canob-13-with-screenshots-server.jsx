import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-13-with-screenshots-server');
}

export default function Canob13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="canob-13-with-screenshots-server" />;
}
