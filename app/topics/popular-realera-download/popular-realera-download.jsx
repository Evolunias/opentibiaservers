import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realera-download');
}

export default function PopularRealeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-realera-download" />;
}
