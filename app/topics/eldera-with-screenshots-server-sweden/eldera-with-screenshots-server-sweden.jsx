import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-screenshots-server-sweden');
}

export default function ElderaWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-screenshots-server-sweden" />;
}
