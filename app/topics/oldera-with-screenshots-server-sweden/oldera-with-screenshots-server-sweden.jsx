import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-screenshots-server-sweden');
}

export default function OlderaWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-screenshots-server-sweden" />;
}
