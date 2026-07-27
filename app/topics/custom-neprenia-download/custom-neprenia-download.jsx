import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-neprenia-download');
}

export default function CustomNepreniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-neprenia-download" />;
}
