import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-imperianic-download');
}

export default function PopularImperianicDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-imperianic-download" />;
}
