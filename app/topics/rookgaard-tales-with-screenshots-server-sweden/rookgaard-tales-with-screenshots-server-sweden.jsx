import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-screenshots-server-sweden');
}

export default function RookgaardTalesWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-screenshots-server-sweden" />;
}
