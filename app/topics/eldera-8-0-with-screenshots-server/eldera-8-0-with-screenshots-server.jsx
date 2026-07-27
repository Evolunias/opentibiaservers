import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-0-with-screenshots-server');
}

export default function Eldera80WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-0-with-screenshots-server" />;
}
