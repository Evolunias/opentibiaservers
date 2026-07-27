import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-download');
}

export default function KasteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="kasteria-download" />;
}
