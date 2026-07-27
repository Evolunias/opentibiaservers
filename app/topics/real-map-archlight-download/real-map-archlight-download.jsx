import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-archlight-download');
}

export default function RealMapArchlightDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-archlight-download" />;
}
