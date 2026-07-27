import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-baiak-ilusion-download');
}

export default function HighrateBaiakIlusionDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-baiak-ilusion-download" />;
}
