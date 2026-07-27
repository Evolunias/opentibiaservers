import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-4-with-screenshots-server');
}

export default function Eldera84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-4-with-screenshots-server" />;
}
