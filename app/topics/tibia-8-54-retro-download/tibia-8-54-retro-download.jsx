import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-retro-download');
}

export default function Tibia854RetroDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-retro-download" />;
}
