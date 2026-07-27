import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-blazera-download');
}

export default function ActiveBlazeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-blazera-download" />;
}
