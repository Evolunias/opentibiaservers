import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-neprenia-download');
}

export default function ActiveNepreniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-neprenia-download" />;
}
