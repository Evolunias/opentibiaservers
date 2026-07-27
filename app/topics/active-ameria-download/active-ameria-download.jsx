import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ameria-download');
}

export default function ActiveAmeriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-ameria-download" />;
}
