import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-14-with-screenshots-server');
}

export default function Eldera14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-14-with-screenshots-server" />;
}
