import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-blazera-download');
}

export default function CurrentBlazeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-blazera-download" />;
}
