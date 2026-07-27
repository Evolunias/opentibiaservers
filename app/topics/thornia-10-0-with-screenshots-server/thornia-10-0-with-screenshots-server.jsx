import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-10-0-with-screenshots-server');
}

export default function Thornia100WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-10-0-with-screenshots-server" />;
}
