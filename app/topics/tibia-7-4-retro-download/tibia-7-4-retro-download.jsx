import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-retro-download');
}

export default function Tibia74RetroDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-retro-download" />;
}
