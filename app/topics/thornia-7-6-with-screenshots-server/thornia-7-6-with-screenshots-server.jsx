import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-6-with-screenshots-server');
}

export default function Thornia76WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-6-with-screenshots-server" />;
}
