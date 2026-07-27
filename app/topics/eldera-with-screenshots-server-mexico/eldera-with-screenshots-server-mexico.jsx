import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-screenshots-server-mexico');
}

export default function ElderaWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-screenshots-server-mexico" />;
}
