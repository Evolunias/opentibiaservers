import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-blazera-download');
}

export default function TopBlazeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-blazera-download" />;
}
