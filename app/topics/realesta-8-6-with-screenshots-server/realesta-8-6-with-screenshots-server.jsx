import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-6-with-screenshots-server');
}

export default function Realesta86WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-6-with-screenshots-server" />;
}
