import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaretro-download');
}

export default function NoResetTibiaretroDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaretro-download" />;
}
