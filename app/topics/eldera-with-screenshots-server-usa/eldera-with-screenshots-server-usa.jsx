import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-screenshots-server-usa');
}

export default function ElderaWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-screenshots-server-usa" />;
}
