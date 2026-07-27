import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-blazera-download');
}

export default function NewBlazeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-blazera-download" />;
}
