import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-retro-download');
}

export default function Tibia86RetroDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-retro-download" />;
}
