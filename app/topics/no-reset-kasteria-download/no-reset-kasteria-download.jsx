import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-kasteria-download');
}

export default function NoResetKasteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-kasteria-download" />;
}
