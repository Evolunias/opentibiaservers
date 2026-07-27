import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-13-with-screenshots-server');
}

export default function Realesta13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-13-with-screenshots-server" />;
}
