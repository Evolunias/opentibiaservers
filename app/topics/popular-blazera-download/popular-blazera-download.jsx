import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-blazera-download');
}

export default function PopularBlazeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-blazera-download" />;
}
