import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-kasteria-download');
}

export default function ActiveKasteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-kasteria-download" />;
}
