import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaretro-download');
}

export default function LowrateTibiaretroDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaretro-download" />;
}
