import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-download-france');
}

export default function RealMapDownloadFranceKeywordPage() {
  return <StaticKeywordPage slug="real-map-download-france" />;
}
