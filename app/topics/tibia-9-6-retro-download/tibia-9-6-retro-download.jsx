import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-retro-download');
}

export default function Tibia96RetroDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-retro-download" />;
}
