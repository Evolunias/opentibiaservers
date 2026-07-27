import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-retro-download');
}

export default function Tibia13RetroDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-retro-download" />;
}
