import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-neprenia-download');
}

export default function NoResetNepreniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-neprenia-download" />;
}
