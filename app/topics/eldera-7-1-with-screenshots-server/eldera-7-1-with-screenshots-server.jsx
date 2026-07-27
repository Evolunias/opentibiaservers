import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-1-with-screenshots-server');
}

export default function Eldera71WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-1-with-screenshots-server" />;
}
