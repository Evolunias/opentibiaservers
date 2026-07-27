import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-11-with-screenshots-server');
}

export default function Thornia11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-11-with-screenshots-server" />;
}
