import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaretro-download');
}

export default function CurrentTibiaretroDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaretro-download" />;
}
