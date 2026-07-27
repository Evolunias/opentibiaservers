import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-download');
}

export default function Tibia86DownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-download" />;
}
