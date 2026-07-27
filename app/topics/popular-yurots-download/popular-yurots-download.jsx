import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-yurots-download');
}

export default function PopularYurotsDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-yurots-download" />;
}
