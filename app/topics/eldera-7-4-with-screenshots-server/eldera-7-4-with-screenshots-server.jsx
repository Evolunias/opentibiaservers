import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-4-with-screenshots-server');
}

export default function Eldera74WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-4-with-screenshots-server" />;
}
