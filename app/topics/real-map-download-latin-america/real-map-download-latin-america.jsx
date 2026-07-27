import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-download-latin-america');
}

export default function RealMapDownloadLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-download-latin-america" />;
}
