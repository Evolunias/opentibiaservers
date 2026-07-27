import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaretro-download');
}

export default function PopularTibiaretroDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaretro-download" />;
}
