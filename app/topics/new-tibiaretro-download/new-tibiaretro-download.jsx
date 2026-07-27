import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaretro-download');
}

export default function NewTibiaretroDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaretro-download" />;
}
