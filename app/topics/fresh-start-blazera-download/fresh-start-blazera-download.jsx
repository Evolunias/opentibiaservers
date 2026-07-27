import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-blazera-download');
}

export default function FreshStartBlazeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-blazera-download" />;
}
