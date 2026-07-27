import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-12-with-screenshots-server');
}

export default function Canob12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="canob-12-with-screenshots-server" />;
}
