import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classicus-download');
}

export default function PopularClassicusDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-classicus-download" />;
}
