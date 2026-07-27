import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-download');
}

export default function TibiaCustomServerDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-download" />;
}
