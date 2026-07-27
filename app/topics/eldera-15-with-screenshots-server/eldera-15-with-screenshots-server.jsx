import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-15-with-screenshots-server');
}

export default function Eldera15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-15-with-screenshots-server" />;
}
