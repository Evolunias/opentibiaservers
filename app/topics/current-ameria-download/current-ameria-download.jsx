import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ameria-download');
}

export default function CurrentAmeriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-ameria-download" />;
}
