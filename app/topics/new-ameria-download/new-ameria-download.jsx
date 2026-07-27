import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ameria-download');
}

export default function NewAmeriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-ameria-download" />;
}
