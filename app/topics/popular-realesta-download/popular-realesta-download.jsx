import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realesta-download');
}

export default function PopularRealestaDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-realesta-download" />;
}
