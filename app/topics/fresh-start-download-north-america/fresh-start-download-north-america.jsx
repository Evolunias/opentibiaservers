import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-download-north-america');
}

export default function FreshStartDownloadNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-download-north-america" />;
}
