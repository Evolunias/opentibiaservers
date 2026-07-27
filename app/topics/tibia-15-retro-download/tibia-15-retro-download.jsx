import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-retro-download');
}

export default function Tibia15RetroDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-retro-download" />;
}
