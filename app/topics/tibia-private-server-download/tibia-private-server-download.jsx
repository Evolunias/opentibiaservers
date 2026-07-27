import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-download');
}

export default function TibiaPrivateServerDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-download" />;
}
