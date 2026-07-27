import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ameria-download');
}

export default function CustomAmeriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-ameria-download" />;
}
