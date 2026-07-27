import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiara-download');
}

export default function PopularTibiaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiara-download" />;
}
