import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-6-with-screenshots-server');
}

export default function Realesta76WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-6-with-screenshots-server" />;
}
