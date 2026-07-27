import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaorigins-download');
}

export default function RealMapTibiaoriginsDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaorigins-download" />;
}
