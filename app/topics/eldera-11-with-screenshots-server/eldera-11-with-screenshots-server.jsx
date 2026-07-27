import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-11-with-screenshots-server');
}

export default function Eldera11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-11-with-screenshots-server" />;
}
