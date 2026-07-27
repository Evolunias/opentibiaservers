import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaretro-download');
}

export default function ActiveTibiaretroDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaretro-download" />;
}
