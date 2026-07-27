import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-4-with-screenshots-server');
}

export default function Realesta74WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-4-with-screenshots-server" />;
}
