import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-retro-download');
}

export default function Tibia11RetroDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-retro-download" />;
}
