import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-originaltibia-download');
}

export default function PopularOriginaltibiaDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-originaltibia-download" />;
}
