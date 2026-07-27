import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-1-with-screenshots-server');
}

export default function Canob71WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-1-with-screenshots-server" />;
}
