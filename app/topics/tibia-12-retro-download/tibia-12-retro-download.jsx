import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-retro-download');
}

export default function Tibia12RetroDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-retro-download" />;
}
