import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-12-with-screenshots-server');
}

export default function Eldera12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-12-with-screenshots-server" />;
}
