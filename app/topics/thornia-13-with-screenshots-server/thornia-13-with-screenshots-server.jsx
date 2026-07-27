import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-13-with-screenshots-server');
}

export default function Thornia13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-13-with-screenshots-server" />;
}
