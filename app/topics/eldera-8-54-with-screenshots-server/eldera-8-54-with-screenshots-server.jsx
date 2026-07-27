import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-54-with-screenshots-server');
}

export default function Eldera854WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-54-with-screenshots-server" />;
}
