import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaretro-download');
}

export default function FreshStartTibiaretroDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaretro-download" />;
}
