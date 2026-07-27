import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaretro-download');
}

export default function HighrateTibiaretroDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaretro-download" />;
}
