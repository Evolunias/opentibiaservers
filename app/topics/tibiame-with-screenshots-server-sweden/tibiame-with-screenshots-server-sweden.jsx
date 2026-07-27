import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-screenshots-server-sweden');
}

export default function TibiameWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-screenshots-server-sweden" />;
}
