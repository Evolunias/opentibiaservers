import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-retro-download');
}

export default function Tibia772RetroDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-retro-download" />;
}
