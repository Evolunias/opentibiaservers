import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-screenshots-server-sweden');
}

export default function TibijkaWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-screenshots-server-sweden" />;
}
