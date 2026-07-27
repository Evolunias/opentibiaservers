import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-kasteria-download');
}

export default function CustomKasteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-kasteria-download" />;
}
