import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-11-with-screenshots-server');
}

export default function Realesta11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-11-with-screenshots-server" />;
}
