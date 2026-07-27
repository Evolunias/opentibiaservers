import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-blazera-download');
}

export default function CustomBlazeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-blazera-download" />;
}
