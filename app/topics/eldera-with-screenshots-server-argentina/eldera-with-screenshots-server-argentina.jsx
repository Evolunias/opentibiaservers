import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-screenshots-server-argentina');
}

export default function ElderaWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-screenshots-server-argentina" />;
}
