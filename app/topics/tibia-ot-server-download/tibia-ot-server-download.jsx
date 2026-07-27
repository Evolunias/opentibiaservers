import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-download');
}

export default function TibiaOtServerDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-download" />;
}
