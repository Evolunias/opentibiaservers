import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-download');
}

export default function TibiaHighExpServerDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-download" />;
}
