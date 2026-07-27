import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-blazera-download');
}

export default function BestBlazeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-blazera-download" />;
}
