import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-98-with-screenshots-server');
}

export default function Eldera1098WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-98-with-screenshots-server" />;
}
