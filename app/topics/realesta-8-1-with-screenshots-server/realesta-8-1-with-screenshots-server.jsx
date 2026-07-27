import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-1-with-screenshots-server');
}

export default function Realesta81WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-1-with-screenshots-server" />;
}
