import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-download');
}

export default function Tibia80DownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-download" />;
}
