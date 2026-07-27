import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-luminera-download');
}

export default function RealMapLumineraDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-luminera-download" />;
}
