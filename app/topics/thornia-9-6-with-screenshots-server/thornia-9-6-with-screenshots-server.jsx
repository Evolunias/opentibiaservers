import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-9-6-with-screenshots-server');
}

export default function Thornia96WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-9-6-with-screenshots-server" />;
}
