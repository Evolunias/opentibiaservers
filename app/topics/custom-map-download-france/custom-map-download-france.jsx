import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-download-france');
}

export default function CustomMapDownloadFranceKeywordPage() {
  return <StaticKeywordPage slug="custom-map-download-france" />;
}
