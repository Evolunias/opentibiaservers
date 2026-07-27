import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiantis-download');
}

export default function NoResetTibiantisDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiantis-download" />;
}
