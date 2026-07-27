import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-0-with-screenshots-server');
}

export default function Thornia80WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-0-with-screenshots-server" />;
}
