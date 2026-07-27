import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-4-with-screenshots-server');
}

export default function Realesta84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-4-with-screenshots-server" />;
}
