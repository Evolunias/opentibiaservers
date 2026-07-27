import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibianus-download');
}

export default function PopularTibianusDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-tibianus-download" />;
}
