import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-screenshots-server-sweden');
}

export default function TibiaraWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-screenshots-server-sweden" />;
}
