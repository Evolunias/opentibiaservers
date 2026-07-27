import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-download-latin-america');
}

export default function PvpeDownloadLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-download-latin-america" />;
}
