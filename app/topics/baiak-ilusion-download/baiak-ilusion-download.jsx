import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-download');
}

export default function BaiakIlusionDownloadKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-download" />;
}
