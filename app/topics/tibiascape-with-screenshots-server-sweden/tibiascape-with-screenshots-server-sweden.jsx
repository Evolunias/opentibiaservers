import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-screenshots-server-sweden');
}

export default function TibiascapeWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-screenshots-server-sweden" />;
}
