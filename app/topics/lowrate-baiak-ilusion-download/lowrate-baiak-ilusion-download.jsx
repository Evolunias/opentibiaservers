import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-baiak-ilusion-download');
}

export default function LowrateBaiakIlusionDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-baiak-ilusion-download" />;
}
