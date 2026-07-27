import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-retro-download');
}

export default function Tibia76RetroDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-retro-download" />;
}
