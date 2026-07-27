import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-0-with-screenshots-server');
}

export default function Realesta100WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-0-with-screenshots-server" />;
}
