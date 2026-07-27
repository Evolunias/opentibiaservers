import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-6-with-screenshots-server');
}

export default function Eldera86WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-6-with-screenshots-server" />;
}
