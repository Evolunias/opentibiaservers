import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-baiak-ilusion-download');
}

export default function NewBaiakIlusionDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-baiak-ilusion-download" />;
}
