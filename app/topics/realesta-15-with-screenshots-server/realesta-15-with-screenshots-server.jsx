import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-15-with-screenshots-server');
}

export default function Realesta15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-15-with-screenshots-server" />;
}
